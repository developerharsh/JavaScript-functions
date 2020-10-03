let arr=[1,5,3,7]

function contains(arr,element,i=0)
{
    if(arr[i]==undefined)
        return false;
    else if(arr[i]==element)
        return true;
    else  
        return contains(arr,element,i+1);
}

console.log(contains(arr,2));