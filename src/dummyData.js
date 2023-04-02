import PostImage1 from './assets/img/post/1.jpeg';
import PostImage2 from './assets/img/post/2.jpeg';
import PostImage3 from './assets/img/post/3.jpeg';
import PostImage4 from './assets/img/post/4.jpeg';
import PostImage5 from './assets/img/post/5.jpeg';
import PostImage6 from './assets/img/post/6.jpeg';
import PostImage7 from './assets/img/post/7.jpeg';
import PostImage8 from './assets/img/post/8.jpeg';
import PostImage9 from './assets/img/post/9.jpeg';
import PostImage10 from './assets/img/post/10.jpeg';

import Useriamge1 from './assets/img/persons/1.jpeg';
import Useriamge2 from './assets/img/persons/2.jpeg';
import Useriamge3 from './assets/img/persons/3.jpeg';
import Useriamge4 from './assets/img/persons/4.jpeg';
import Useriamge5 from './assets/img/persons/5.jpeg';
import Useriamge6 from './assets/img/persons/6.jpeg';
import Useriamge7 from './assets/img/persons/7.jpeg';
import Useriamge8 from './assets/img/persons/8.jpeg';
import Useriamge9 from './assets/img/persons/9.jpeg';
import Useriamge10 from './assets/img/persons/10.jpeg';

var lang = document.getElementsByTagName('html')[0].getAttribute('lang');

var userLang = navigator.language || navigator.userLanguage; 

var agoText1, agoText2, agoText3, agoText4, agoText5, agoText6, agoText7, agoText8, agoText9, agoText10  = "";
var desc1, desc2, desc3, desc4, desc5, desc6, desc7, desc8, desc9, desc10 = "";
// alert ("The language is: " + userLang);
if (lang === 'es') {
  agoText1 = "hace 5 minutos";
  agoText2 = "hace 15 minutos";
  agoText3 = "hace 1 hora";
  agoText4 = "hace 4 horas";
  agoText5 = "hace 5 horas";
  agoText6 = "hace 1 día";
  agoText7 = "hace 2 días";
  agoText8 = "hace 3 días";
  agoText9 = "hace 5 días";
  agoText10 = "hace 1 semana";

  desc1 = "Amor por Todos, Odio por Nadie.";
  desc2 = "Sonríe y deja que el resto del mundo se pregunte por qué.";
  desc3 = "Cada momento es un nuevo comienzo.";
  desc4 = "No hay camino a la felicidad. La felicidad es el camino.";
  desc5 = "La vida puede ser maravillosa si no le tienes miedo.";
  desc6 = "La buena fortuna favorece a los atrevidos.";
  desc7 = "Nunca te arrepientas de nada que te haga sonreír.";
  desc8 = "Nunca es tarde para volver a intentarlo.";
  desc9 = "Cambia el mundo siendo tú mismo.";
  desc10 = "Cree en ti y todo será posible.";
} else if(lang === 'ca') {
  agoText1 = "fa 5 minuts";
  agoText2 = "fa 15 minuts";
  agoText3 = "fa 1 hora";
  agoText4 = "fa 4 horas";
  agoText5 = "fa 5 horas";
  agoText6 = "fa 1 dia";
  agoText7 = "fa 2 dies";
  agoText8 = "fa 3 dies";
  agoText9 = "fa 5 dies";
  agoText10 = "fa 1 setmana";

  desc1 = "Amor per a Tots, odi per Ningú.";
  desc2 = "Somriu i deixa que la resta del món es pregunti per què.";
  desc3 = "Cada moment és un nou començament.";
  desc4 = "No hi ha camí cap a la felicitat. La felicitat és el camí.";
  desc5 = "La vida pot ser meravellosa si no li tens por.";
  desc6 = "La bona fortuna afavoreix els atrevits.";
  desc7 = "No et penedis de res que t'hagi fet somriure.";
  desc8 = "Mai no és tard per tornar a intentar-ho.";
  desc9 = "Canvia el món sent tu mateix.";
  desc10 = "Creu en tu i tot serà possible.";
} else if(lang === 'en') {
  agoText1 = "5 minutes ago";
  agoText2 = "15 minutes ago";
  agoText3 = "1 hour ago";
  agoText4 = "4 hours ago";
  agoText5 = "5 hours ago";
  agoText6 = "1 day ago";
  agoText7 = "2 days ago";
  agoText8 = "3 days ago";
  agoText9 = "5 days ago";
  agoText10 = "1 week ago";

  desc1 = "Love For All, Hatred For None.";
  desc2 = "Smile and leave the rest of the world to wonder why.";
  desc3 = "Every moment is a fresh beginning.";
  desc4 = "There is no road to happiness. Happiness is the road.";
  desc5 = "Life can be wonderful if you are not afraid of it.";
  desc6 = "Good fortune favors the daring.";
  desc7 = "Never regret anything that made you smile.";
  desc8 = "It is never too late to try again.";
  desc9 = "Change the world by being yourself.";
  desc10 = "Believe in yourself and everything will be possible.";
}else if(lang === 'de') {
  agoText1 = "vor 5 Minuten";
  agoText2 = "vor 15 Minuten";
  agoText3 = "vor 1 Stunde";
  agoText4 = "vor 4 Stunden";
  agoText5 = "vor 5 Stunden";
  agoText6 = "vor 1 Tag";
  agoText7 = "vor 2 Tagen";
  agoText8 = "vor 3 Tagen";
  agoText9 = "vor 5 Tagen";
  agoText10 = "vor 1 Woche";

  desc1 = "Liebe für alle, Hass für niemanden.";
  desc2 = "Lächle und lass den Rest der Welt sich fragen, warum.";
  desc3 = "Jeder Augenblick ist ein Neuanfang.";
  desc4 = "Es gibt keinen Weg zum Glück. Glück ist der Weg.";
  desc5 = "Das Leben kann wunderbar sein, wenn man keine Angst davor hat.";
  desc6 = "Das Glück begünstigt die Waghalsigen.";
  desc7 = "Bereue nie etwas, das dich zum Lächeln gebracht hat.";
  desc8 = "Es ist nie zu spät, es noch einmal zu versuchen.";
  desc9 = "Verändere die Welt, indem du du selbst bist.";
  desc10 = "Glaub an dich und alles wird möglich sein.";
}
export const Users = [
  {
    id:1,
    profilePicture: Useriamge1,
    username: "Safak Kocaoglu",
  },
  {
    id:2,
    profilePicture: Useriamge2,
    username: "Janell Shrum",
  },
  {
    id:3,
    profilePicture: Useriamge3,
    username: "Alex Durden",
  },
  {
    id:4,
    profilePicture: Useriamge4,
    username: "Dora Hawks",
  },
  {
    id:5,
    profilePicture: Useriamge5,
    username: "Thomas Holden",
  },
  {
    id:6,
    profilePicture: Useriamge6,
    username: "Shirley Beauchamp",
  },
  {
    id:7,
    profilePicture: Useriamge7,
    username: "Travis Bennett",
  },
  {
    id:8,
    profilePicture: Useriamge8,
    username: "Kristen Thomas",
  },
  {
    id:9,
    profilePicture: Useriamge9,
    username: "Gary Duty",
  },
  {
    id:10,
    profilePicture: Useriamge10,
    username: "Safak Kocaoglu",
  },
];

export const Posts = [
  {
    id: 1,
    desc: desc1,
    photo: PostImage1,
    date: agoText1,
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    desc: desc2,
    photo: PostImage2,
    date: agoText2,
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: desc3,
    photo: PostImage3,
    date: agoText3,
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    desc: desc4,
    photo: PostImage4,
    date: agoText4,
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    desc: desc5,
    photo: PostImage5,
    date: agoText5,
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    desc: desc6,
    photo: PostImage6,
    date: agoText6,
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: desc7,
    photo: PostImage7,
    date: agoText7,
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    desc: desc8,
    photo: PostImage8,
    date: agoText8,
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: desc9,
    photo: PostImage9,
    date: agoText9,
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    desc: desc10,
    photo: PostImage10,
    date: agoText10,
    userId: 10,
    like: 104,
    comment: 12,
  },
];