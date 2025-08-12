module.exports = {

    apps: [
        {
            name: "kimmohito-api",
            cwd: ".",
            interpreter: "none",
            script: "bash",
            args: [
                "-c",
                "php artisan serve --port=8001"
            ],
        },
    ],

}
