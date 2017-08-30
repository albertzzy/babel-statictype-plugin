const util = require('util');
const exec = util.promisify(require('child_process').exec);
const expect = require('expect');
const path = require('path');

async function testNormalFunc(){
    
    return  await exec('babel '+path.resolve(__dirname,'scripts/normal.js')+' --out-file '+path.resolve(__dirname,'dist/normal.js'));

}

async function testErrorFunc(){

    return  await exec('babel '+path.resolve(__dirname,'scripts/error.js')+' --out-file '+path.resolve(__dirname,'dist/error.js'));
}



describe('compile successfully',function(){
    it('should compile successfully',function(done){

        testNormalFunc().then((res)=>{
            // console.log(res);
            expect(res.stdout).toBe('');
            expect(res.stderr).toBe(''); 
            done();

        }).catch((e) => {
            console.log(e);
        })

    })

})


describe('its a error case',function(){
    it('should pop compile error',function(done){

        testErrorFunc().then((res)=>{

            done();

        }).catch((e) => {
            // console.log(e);

            expect(e instanceof Error).toBe(true);

            done();
        })

    })

})