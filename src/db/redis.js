const {createClient} = require('redis');
require('dotenv').config()
const client = createClient({ 
  url: 'redis-12802.c293.eu-central-1-1.ec2.cloud.redislabs.com:12802'
});
client.on('connect', () => {
  console.log('connected to redis...');
})
client.on('ready', () => {
  console.log('connected to redis and ready to user...');
})
client.on('error', (err) => {
  console.log(err.message);
})
client.on('end', () => {
  console.log('client disconnection redis');
})
client.on('SIGINT', () => {
  client.quit(); 
})

module.exports = {
  client
}