let arr=[1,2,3,4,5];

function take(arr,limit,i=0,ret=[])
{
    if(i==limit)
        return ret;
    else
    {
        ret[i]=arr[i];
        return take(arr,limit,i+1,ret);
    }
}

console.log(take(arr,5));