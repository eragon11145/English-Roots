var roots,definitions,x,y,word, word2
roots=['epi','hyper','hypo','in','re','trans','un','con','in','chromo','dem','derm','feder','gen','meso','mono','pachy','pan','poly','scop','al','ant','ia','ic','ium','less','ly','ness','oid','asylum','atrophy','contrite','conviction','disinclination','disparage','inadvertently','inane','pessimism','petty','rescind','skeptic','squander','truculent','ubiquitous','ana','di','e','ex','il','in','syn','bio','chron','dict','geo','mal','meter','metr','nov','opt','phon','port','therm','val','able','an','arian','el','ful','ice','ion','ism','ology','ous','y','canard', 'crass','disparity','dispassionate','dispel','exacerbate','exalt','execute','incidental','incite','lithe','nepotism','predilection','ruminate','vapid','de','fer','gastro','graph','hydro','nat','onym','path','ate','en','itis','auspicious','concomitant','debauchery','gelid','immolate','incompatible','incongruous','incorrigible','maudlin','nefarious','perfunctory','prosaic','revulsion','solemnity','megalomania']
definitions=['on, outside','over, above','under, below','not','back, again','across, through, over','not','with, together','not','color','people','skin','faith, trust','birth, produce, rate','middle','one','thick','all','many','look, view','like, related to','one who, that which','condition','like, related to','chemical element','without','like, manner of','state of','resembling','a place offering protection; an instituion for the care of teh mentally ill; sanctuary.','to cause to wither or waste away.','humbled by guilt and repentant for ones sins.','a strong belief; the process of proving guilty','lack of willingness; reluctance.','to slight; belittle; criticize','unintentionally; accidentally.','lacking sense or substance','tendenc to take the gloomiest possible view of a situation.','trivial; narrow; spiteful.','to void; repeal.','one who instinctively doubts or habitually disagrees.','to spend wastefully.','savage and cruel; inclined to fight.','being everywhere, omnipresent.','back, again','two','out','former, out','not','in, into','with, together','life','time','speak, declare','earth, ground','bad','measure','measure','new','eye, vision','sound','carry','heat','strong','able, can do','native of, relating to','one who, that which','small, a group of','full of','that which is, who is','state, condition,action','act, state, condition','science, study of','having the quality of','quality','a false story','grossly ignorant; coarse; indelicate.','unlike or unequal','lack of emotions; impartial','to rid or dispense with.','to make worse, as with pain, emotion, disease','to raise in position or power, status or the like.','to carry out, to put into effect.','accidental; of minor importance','to provoke action; to stir up.','supple; limber; graceful','favoritism granted to relatives','a personal preference for something.','to chew cud; to meditate or muse.','lacking taste, spirit, life, or animation.','away, down, not','bring, bear, yield','stomach','write, written','water','birth, to spring forth','word','feeling, disease','to make, to act','made of, make','inflammation','favorable','occurrence together or in connection with one another','indulgence in sensual pleasures, intemperance','very cold, icy','to slaughter or destroy','incapable of getting along together','not corresponding, inconsistent','incapable of being corrected or reformed','excessively sentimental','evil, infamous','done or acting routinely and with little interest or care','matter of fact; straightforward, dull; ordinary','strong feeling of disgust or loathing','a solemn observance; seriousness','a mental condition in which the patient has grandiose delusions']
x=Math.floor(44*Math.random())
y=Math.floor(44*Math.random())
function L(){
if (document.getElementById('Sets').value=='1'){
  x=Math.floor(28*Math.random())
}
if (document.getElementById('Sets').value=='2'){
  x=28+Math.floor(15*Math.random())
}
if (document.getElementById('Sets').value=='3'){
  x=44+Math.floor(31*Math.random())
}
if (document.getElementById('Sets').value=='4'){
  x=75+Math.floor(15*Math.random())
}
if (document.getElementById('Sets').value=='5'){
  x=90+Math.floor(11*Math.random())
}
if (document.getElementById('Sets').value=='6'){
  x=101+Math.floor(15*Math.random())
}
if (document.getElementById('Sets').value=='all'){
  x=Math.floor(116*Math.random())
}
y=Math.floor(28*Math.random())
document.getElementById('root').innerHTML=definitions[x]
}
function guess(word){
  word=word.trim()
  word=word.toLowerCase();
  word2=word[0]
  word=word.slice(1)
  word=word2+word
  if (word==roots[x]){
    document.getElementById("message").innerHTML='Correct! The root was ' + roots[x] +'!';
  L()
  document.getElementById("attempt").value=' '
  }
  

}
var input = document.getElementById("attempt")
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
  guess(document.getElementById("attempt").value)
}
})
