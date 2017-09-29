let inquirer = require('inquirer');
let cp = require('child_process');

inquirer.prompt([{
    name: 'env',
    message: '请选择要使用的编译环境（Please select the compilation environment to use）',
    type: 'list',
    default: 'dev',
    choices: ['dev', 'prepub', 'prod']
}])
.then((answer) => {
    let cmd = `BUILD_ENV="${answer.env}" NODE_ENV="production" node build/build.js`;
    
    console.log('   $ ' + cmd);
    console.log('   building...');

    cp.exec(cmd);
})