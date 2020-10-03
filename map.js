let arr=[1,2,3];

function map(arr,func,i=0,ret=[])
{
    if(arr[i]==undefined)
        return ret;
    else
    {
        ret[i]=func(arr[i],i,arr);
        return map(arr,func,i+1,ret);
    }
}

console.log(map(arr,a=>a*a));

