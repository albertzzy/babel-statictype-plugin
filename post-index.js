// module.exports.exp = 12;


function printTips(a, b) {
	tips.forEach((tip, i) => console.log(`Tip ${i}:` + tip));
}

export default printTips;
module.exports = printTips;

/*
const demoVisitor = {

	Identifier(path){
		console.log(path.node)
	},	

	ExportNamedDeclaration(path,state){

		// console.log(path)
	}



}
 


module.exports = function({types:t}){
	return {

		visitor:{

			Program(path,state){

				path.traverse(demoVisitor,state)

			}

		}


	}
}


*/
