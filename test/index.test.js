const util = require('util');
const exec = util.promisify(require('child_process').exec);
const expect = require('expect');

async function testNormalFunc(){
    
    return  await exec('babel fixtures/normal.js --out-dir fixtures/dist --plugins=babel-statictype-plugin');

}


describe('compile successfully',function(){
    it('should compile successfully',function(done){

        testNormalFunc().then((res)=>{
        console.log(res);

        done();

        }).catch((e) => {
            console.log(e);
        })

        

    })

})

