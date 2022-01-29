const { axios } = require('axios');
const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js')


  const prefix = ".";



  function randomInt(min, max) {
	return (Math.floor(Math.random() * (max - min))) + min;
  }






const client = new Discord.Client({
	allowedMentions: {
		parse: ['users', 'roles'],
		repliedUser: true,


	},
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_PRESENCES",
		"GUILD_MEMBERS",
		"GUILD_MESSAGE_REACTIONS"
	],
})



client.on("ready", () => {
	console.log("i Am ready");
})

client.on("message", msg => {


	let role = msg.guild.roles.cache.find(r => r.name === "Muted");


	const MOD = msg.member;
const user = msg.mentions.members.first()



if(msg.content.startsWith('.ban')) {

	if(msg.member.roles.cache.some(role => role.name === 'Admin')){
   

    user.ban();

	const banembed = new MessageEmbed()
.setTitle('Ban')
.setDescription('Banned: ' + user.user.tag);



msg.channel.send({embeds: [banembed]})
	}

	else {
		msg.channel.send("Sorry, But You Dont Have Permission To Do This!")
	}
  
}

if(msg.content.startsWith('.kick')) {

	if(msg.member.roles.cache.some(role => role.name === 'Admin')){
   
      
	const kickembed = new MessageEmbed()
	.setTitle('Kick')
	.setDescription('Kicked: ' + user.user.tag);
	


    user.kick();

	msg.channel.send({embeds: [kickembed]})
	}

	else {
		msg.channel.send("Sorry, But You Dont Have Permission To Do This!")
	}
  
}


if(msg.content.startsWith(".membercount")) {


	
const embed = new MessageEmbed()
.setTitle('Membercount')
.setDescription('Members: ' + `**${msg.guild.memberCount}**`)

	msg.channel.send({embeds: [embed]})


	
    


    
  
}



if(msg.content.startsWith('.mute'))
{

	if(msg.member.roles.cache.some(role => role.name === 'Admin'))
	{

		let member = msg.mentions.members.first();

		const muteembed = new MessageEmbed()
.setTitle('Mute')
.setDescription('Muted: ' + member.user.tag);

	msg.channel.send({embeds: [muteembed]})

	

	member.roles.add(role)
	}
}


if(msg.content.startsWith('.unmute'))
{

	if(msg.member.roles.cache.some(role => role.name === 'Admin'))
	{

	let member = msg.mentions.members.first();

	const unmuteembed = new MessageEmbed()
	.setTitle('UnMute')
	.setDescription('UnMuted: ' + member.user.tag);
	
		msg.channel.send({embeds: [unmuteembed]})

	member.roles.remove(role)
	}
}


 




	


	});




  

	

client.login("OTM1OTU4ODY4NDQ4NjY5NzA3.YfGNnw.RO0yn5Cqb26pA7BDgYwwYTCXiIo")
