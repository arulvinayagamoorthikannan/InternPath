function filterList(list,f){return list.filter(i=>(!f.domain||i.domain===f.domain)&&(!f.type||i.type===f.type)&&(!f.mode||i.mode===f.mode)&&(!f.year||i.years.includes(+f.year))&&
(!f.duration||(f.duration==='short'?i.months<=2:f.duration==='mid'?i.months>=3&&i.months<=4:i.months>=5))&&
(i.practice||computeStatus(i).status==='Verified')&&(!f.verified||(!i.practice&&computeStatus(i).status==='Verified'))&&(f.expired||!isExpired(i)))}
