# Master_djce_rennes

Set your local configs in `./config/config.json`\
\
Your `config.json` should look like that:\
	- ```
	{
	        "db": {
	                "host": "XXXX",
	                "port": XXXX,
	                "database": "XXXX",
	                "user": "XXXX",
	                "password": "XXXX"
	        },
	        "mail": {
	                "service": "XXXX",
	                "auth": {
	                        "user": "XXXX@XXXX.XX",
	                        "pass": "XXXX"
	                }
	        },
	        "session": {
	                "secret": "XXXX",
	                "resave": false,
	                "saveUninitialized": true,
	                "cookie": { "secure": false }
	        }
	}
	```
___

After that, creates your local ssl keys in `./key`\
Use this command:\
	- `openssl req -nodes -new -x509 -keyout server.key -out server.crt`

___

To prepare and deploy your project use:\
	- `sh deploy.sh`
