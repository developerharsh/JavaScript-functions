let arr=[1,2,3,4,5,6];

function drop(arr,limit,i=0,ret=[])
{
    if(arr[i]==undefined)
        return ret;
    else if(i+1<=limit)
        return drop(arr,limit,i+1,ret);
    else
    {
        ret[i-limit]=arr[i];
        return drop(arr,limit,i+1,ret);
    }
}

console.log(drop(arr,6));