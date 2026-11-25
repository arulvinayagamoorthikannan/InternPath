function checkDeadline(i){if(i.practice)return {label:'Practice listing has no application deadline',ok:true,days:null};const d=new Date(i.deadline+'T23:59:59'),days=Math.ceil((d-new Date())/864e5);return {label:'Deadline not passed',ok:days>=0&&!i.expired,days}}
const isExpired=i=>i.practice?false:!checkDeadline(i).ok;
