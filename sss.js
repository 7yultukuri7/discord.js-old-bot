  const guild = client.guilds.get("560663701028339713")
  let ccount = ""
  const cjson  = []
  //*
  guild.channels.forEach(channel  =>{
  if(channel.type === "text"){
    ccount++
    cjson.push(channel)
  }
  })
  for (  let  i = 0;  i < ccount ;  i++  ) {
    cjson.forEach( function( value ) {
 if(value.position=== i){
   if(value.permissionsFor(client.user.id).has('VIEW_CHANNEL')){
 message.channel.send(":white_check_mark: | "+value.name)
}else{
 message.channel.send(":lock: | "+value.name)}
 }
    
});
  }