module.exports = {

    apps: [
        {
            name: "kimmohito-api",
            cwd: ".",
            interpreter: "none",
            script: "bash",
            args: [
                "-c",
                "export NVM_DIR=\"$HOME/.nvm\" && [ -s \"$NVM_DIR/nvm.sh\" ] && . \"$NVM_DIR/nvm.sh\" && php artisan serve --port=8001"
            ],
        },
    ],

}
