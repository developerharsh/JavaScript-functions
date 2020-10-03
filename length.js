let arr=[1,2,3,4,5,6]

function calLength(arr,i=0)
{
    if(arr[i]==undefined)
        return 0;
    else
        return 1+calLength(arr,i+1);
}

console.log(calLength(arr));