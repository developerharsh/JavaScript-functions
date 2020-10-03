let name; //let instead of var

let person={
    fName:"harsh",
    lName:"Chauhan"
};

let selection='fName';

person[selection]="honey";

//console.log(person.fName);

let colors=["red","white"];

colors[2]=1;

//console.log(colors.length);

function disp(first,last)
{
    console.log("hello "+first+" "+last);
}

//disp('harsh','chauhan');

function map(arr,func)
{
    let marr=[];

    for(let i=0;i<arr.length;i++)
    {
        let result=func(arr[i],i,arr);
        marr.push(result);
    }

    return marr;
}

console.log([1,2,3].map(a=>a*a));