// module.exports.exp = 12;


function printTips(a,b) {
  tips.forEach((tip, i) => console.log(`Tip ${i}:` + tip));
}

export default printTips;
module.exports = printTips;



/*
const demoVisitor = {

	Identifier(path){
		// console.log(path.node)
	},	

	ExportNamedDeclaration(path,state){

		// console.log(path)
	},
	FunctionDeclaration(path,state){

		// console.log(path.node.params)

	},
	ExportDefaultDeclaration(path,state){
		// console.log(state)
		// console.log(path.node.declaration.loc.identifierName)
	}



}
 


module.exports = function({types:t}){
	return {

		visitor:{

			Program(path,state){
				path.insertBefore(t.expressionStatement(t.stringLiteral('a=1')))
				// path.traverse(demoVisitor,state)

			}

		}


	}
}

*/