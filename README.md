# Passlogger

Log usernames and passwords for a sshd login attempts


```
git clone https://github.com/jorritd/passlogger.git
```

```
cd passlogger
```
Load dependencies

```
npm install
```

Create a host.key
```
ssh-keygen -f host.key -N '' -t rsa
```

then create the log file
```
touch credentials.log
```
Start the server on port 22 (default). (must be root)
or change the port > 1024 and create a port forwarder in your firewall (see sshd.js)

Run the script, optional via forever e.g. https://www.npmjs.com/package/forever
```
node sshd.js
```
