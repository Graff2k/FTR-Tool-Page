function copyItems() {

    var ipsum = document.getElementById('IpSum');    
    var trshot = document.getElementById('TrShot');
    var resol = document.getElementById("Resol");    
    var stime = document.getElementById('STime'); 
    var etime = document.getElementById('ETime'); 
    var dtime = document.getElementById('DTime');
    var cimp = document.getElementById('CImp');
    var bridge = document.getElementById('bridge');
    var output = document.getElementById("output");
    output.value = "Impact Summary: "+ ipsum.value + "\n"+"Troubleshooting Summary: "+ trshot.value +"\n" 
    +"Resolution: " + resol.value +"\n"
    +"Start Time: " + stime.value +"\n"
    +"End Time: "+ etime.value+ "\n"+
    "Duration: "+ dtime.value +"\n"
    + "Estimated Customer Impact: "+ cimp.value+"\n" 
    + "Groups Engaged: " + bridge.value
    
    output.select();
    navigator.clipboard.writeText( output.value);
    
    
    
}
function openstuff() {
    window.open('./resources/EIN/einPro.html');
    window.open("https://directv.service-now.com/kb_view.do?sysparm_article=KB0010749")
}





