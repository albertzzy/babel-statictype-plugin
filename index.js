const REG = /^(Num|Str|Und|Null|Bool|Sym|Obj)_/;

const funcTypeMap = new Map();


const getRealType = (variName) => {

    let val = variName.match(REG)[1];

    switch(val){
        case 'Num':return 'number';
        case 'Str':return 'string';
        case 'Und':return 'undefined';
        case 'Null':return 'null';
        case 'Sym':return 'symbol';
        case 'Obj':return 'object';
        case 'Bool':return 'boolean';
        default: return 'any';
    }
}


const visitor = {
    VariableDeclaration(path,state){
        let declarationsArray = path.node.declarations;
        let varLen = declarationsArray.length;

        for(let i=0;i<varLen;i++){
            let vari = declarationsArray[i];
            let variName = vari.id.name;
            let realType = getRealType(variName);
            

            if(vari.init){
                let val = vari.init.value;

                if( !(typeof val === realType || (val === null && realType === 'null')) ){

                    throw path.buildCodeFrameError("The value you give to the variable is not the right type.");

                }
            }
        }


    },

    ExpressionStatement(path,state){
        let expressType = path.node.expression.type;

        if(expressType === 'AssignmentExpression'){

            let variName = path.node.expression.left.name;
            let val = path.node.expression.right.value;

            let realType = getRealType(variName);

            if( !(typeof val === realType || (val === null && realType === 'null')) ){

                throw path.buildCodeFrameError("The value you give to the variable is not the right type.");

            }

        }else if (expressType === 'CallExpression'){

            let funcName = path.node.expression.callee.name;
            let paramsType = funcTypeMap.get(funcName);
            let args = path.node.expression.arguments;

            for(let i=0;i<paramsType.length;i++){
                let arg = args[i].value;
                let realType = paramsType[i];

                if( !(typeof arg === realType || (arg === null && realType === 'null')) ){

                    throw path.buildCodeFrameError("The value you give to the variable is not the right type.");

                }
            }


        }
        
    },

    FunctionDeclaration(path,state){

        let funcName = path.node.id.name;
        let params = path.node.params;
        let paramsType = [];

        for(let i=0;i<params.length;i++){
            paramsType.push(getRealType(params[i].name));
        }

        funcTypeMap.set(funcName,[...paramsType]);
    }    

}



module.exports = function({types:t}){
    return {
        'visitor':{
            Program:function(path,state){
                path.traverse(visitor,state);
            }

        }
    }
}
