import * as React from 'react';
import { useGetBlogCategoriesQuery } from '../services/Category'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Navbar from '../app/navbar';
//import { Input } from '@mui/material';

export default function ActionAreaCard() {
  let { data, error, isLoading } = useGetBlogCategoriesQuery('blogCategories')
  const navigate = useNavigate();
  const gotoBlogDetail = (item) => {
    console.log(item);
    localStorage.setItem('category', item.title.replace(' ',"-").toLowerCase());
    navigate('/blogDetails', { state: item });
  }
const [inputText, setInputText] = React.useState("");
const [data1, setData1] = React.useState(data)
// React.useEffect(()=>{
//   setData1(data)
// },
// [data])
const inputHandler = (e) => {
  if (e.target.value === '') {
    data = data1
    setData1(data);
    console.log('inputText',inputText)
}
 else {
   let filterdata = data.data.filter((el) => { return el?.title?.toLowerCase().includes(e.target.value)
}
)
//setData1(data1)
data = [{data:{filterdata}}]
var lowerCase = e.target.value.toLowerCase();
setInputText(lowerCase);
console.log('inputText',filterdata)
}
};
  return (
    <div>
       <Navbar 
       inputHandler ={inputHandler}/>
    <div className="App" style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 5 }}>
        {error ? (
          <>{error?.message}</>
        ) : isLoading ? (
          <>Loading....</>
        ) : data.data.length > 0 ? data.data.map((category) => (
          <>
            <Card onClick={() => { gotoBlogDetail(category) }} sx={{ maxWidth: 345, marginTop: 5, margin: 1 }}>
              <CardMedia
                component="img"
                alt="Blog"
                image={category.image}
              />
              <CardContent>
                <Typography component="div">
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </>
        )) : console.log(data)}
      </div>
    </div>
    </div>
  );
}