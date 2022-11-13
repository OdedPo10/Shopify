// let age=21;
// let fullName='Farkash Menachem'
// let isMarried= false;
// let Favfood= null;
// let Adress=undefined;
// let Typing=undefined;
// let shonAge=15 , shonPhoneNumber='0535383638';

// age=22

//cannot be a reserved keyword
//should be meaningfull
//cannot start with a number
//cannot contain a space or hypen (-)



// console.log(age);
// console.log(22+11);
// console.log('22+11');
// console.log(name)
// console.log(isMarried);
// console.log(Favfood);
// console.log(Adress);


// const intresRate=0.07;
// intresRate=0.001

// const name = "farkash";
// name=0.001;

// let name1='hamburger';
// let colorise='1500';
// let adding='chips onion rings potatos';
// let drink='cokacola zero';

// let Meal1 = {
//     name: 'hamburger',
//     calories: 1500,
//     adding: 'chips onion rings potatos',
//     drink: 'cokacola zero'
// }
// let Meal2 = {
//     name: 'pizza',
//     cooking:{
//         level:2,
//         salt:true
//     },
//     calories: 1200,
//     adding: 'garlic bread tomato sauce',
//     drink: 'fuze tea'
// }

// let Car = {
//     make: 'Suzuki',
//     model: 'jimny',
//     year: 2016,
//     hp: '110',
//     cc: '1500',
//     color: 'metalic silver',
//     interior:{
//         seats: 'black leather',
//         hasradio: true
//     }
// }

// let User = {
//     username: 'odedpo',
//     password: 'Oded123456',
//     age: 23,
//     contactinfo:{
//         adress:{
//             lat: 20,
//             lon: 40
//         },
//         phonenumber:{
//             countryCode: ('+972'),
//             number: ('0535383638')
//         }
//     }

// }

// let name1 = 'tomer OPPENHEIM';
// console.log(name1.charAt(1));
// name1= name1.replaceAll('P','F');
// console.log(name1)

// let number = '13';
// let number1 = 13;

// let name2 = 'oded@gmail.com'

//charAT=הערך הממוספר בתוך הערך
//charcode=איך המחשב רואה את הערך הממוספר
//endswith=בודקת אם הערך מסתיים ב() כלשהו
//includes=בודקת אם הערך נמצא בפנים
//indexof=בודקת מתי בפעם הראשונה נמצא הערך המדובר
//lastindexof=בודקת מתי בפעם האחרונה נמצא הערך המדובר
//replace=מחליף את הערך הראשון בשני(שני,ראשון)
//replaceAll=מחליף את כל הערכים הראשונים בשני(שני,ראשון)
//index=מציג מאיפה הסטרינג מתחיל מאיזה מיקום
//.trim=מבטל את הרווחים בין מילה למילה
//.substrin(x,y)=מקבל את התו ההתחלתי ומסביר לו באיזה מספר תו מסיים
//.substr(x,y)=מקבל את התו ההתחלתי ומסביר לו כמה תווים להציג מאותו תו התחלתי
//.split('x')=מפרק את הסטרינג לממערך סטרינגים בכך שכל האותיות בסטרינג המקורי וזהות לתו שמופיע בסוגריים הופכות לחיץ במערך החדש
//.startswith('www...')=בודק האם הסטרינג מתחיל בתווים שנזין בסוגריים
//.length=מציג את מספר התווים בסטרינג
//.concat=מחבר שני סטרינגים

// let names=['nadav','amit','hila','menachem'];

//.unshift('x')=לקח את כל הסטרינגים דחף אותם ימינה והכניס את האיקס ונותן את מספר הסטרינגים
//.shift('y')=מוציא את השם הראשון, מוציא אותו ומציג את השם 
//.pop()=מוציא את הערך האחרון
//.push('x')=מוסיפ סטרינג נוסף לסוף המערך
//.reverse()=מסדר בסדר הפוך
//.sort()=מסדר את המערך מהקטן לגדול


// let numbers=[10,20,30,40];
// numbers.push(0,50);
// numbers.unshift(60,70);
// console.log(numbers);

// let email=['   oded   ','   cyberpro   ','   com   '];
// email[0]=email[0].trim();
// email[1]=email[1].trim();
// email[2]=email[2].trim();
// console.log(email);
// let signs=['@','.'];
// email=email[0]+signs[0]+email[1]+signs[1]+email[2];
// console.log(email);

// let sentance='oded  portnoy  first  day  javascript  coding';
// let newsen=sentance.split(' ');
// console.log(newsen);

// let x=3;

// {
//     let x=6;
//     console.log(x);
// }

// console.log(x);

// let x=10;
// console.log(x);
// let x=(5);
// let y=x++;
 
// console.log('x>y :-> '+(x>y));

// let a='hodi';
// let b=12;

// console.log(a.length);
// a='menachem farkash';
// console.log(a.length);

let G=9;
if(G%2==0) {
    console.log('even');
}
else
{
    console.log('odd');
}

