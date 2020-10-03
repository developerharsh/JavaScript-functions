let arr=[1,2,3]
function filter(arr,func,i=0,ret=[])
{
    if(arr[i]==undefined)
        return ret;
    else
    {
        if(func(arr[i],i,arr))
            ret[ret.length]=arr[i];
        
        return filter(arr,func,i+1,ret);
    }
}

//console.log(arr);
console.log(filter(arr,a=>a%2==0));