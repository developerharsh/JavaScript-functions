let arr=[1,2,3,4]

function reduce(arr,func,init=0,i=0,ret=0)
{
    if(init!=0 && i==0)
        ret=init;
    
    if(arr[i]==undefined)
        return ret;
    else
    {
        ret=func(ret,arr[i],i,arr);
        return reduce(arr,func,init,i+1,ret);
    }
}

console.log(reduce(arr,(a,b)=>a+b));