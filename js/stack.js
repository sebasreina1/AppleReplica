const a = {
    href: 'https://www.googgle.com',
    text: 'Google',
  };
  
  // console.log(Object.values(a));
  
  const sum = (a, b) => {
    return a + b;
  };
  
  // sum() CALLs the function/method -> execute
  // sum passes the function/method, probably as an argument
  
  const b = ['1', 1, sum(1, 2), sum]; // react - uses this "passing functions a LOT"
  
  // console.log(b);
  
  const links = [
    {
      ...a,
      target: '_blank', // sets information in "run time"
    },
  ];
  
  // console.log(links);
  
  a.target = '_blank'; // sets information about the property in the memory
  // console.log({ a, new_a: a });
  
  // console.log(a);
  
  // console.log(links);
  
  const c = [...b, a]; // is similar to use b.push(a)
  
  // console.log({ b, c });
  
  b.push(a);
  // console.log(b);
  
  const newLinks = [
    {
      ...a,
    },
    {
      href: 'test',
      text: 'test2',
    },
    {
      href: 'test3',
      text: 'test4',
    },
  ];
  
  const myLinks = newLinks.map(
    (item) => {
      console.log(item);
      item.target = '_blank';
      return item;
    }
  ); // looping an array
  
  console.log(myLinks);