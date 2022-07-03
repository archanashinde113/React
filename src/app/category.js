import * as React from 'react';
import {useGetBlogCategoriesQuery} from '../services/Blog'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
 
export default function ActionAreaCard() {
    const { data, error, isLoading } = useGetBlogCategoriesQuery('blogCategories')
    const navigate = useNavigate();
    const gotoBlogDetail=(item)=>{
      console.log(item);
      navigate('/detailPage',{state:item});
  }
  return (
     <div className="App" style={{ display:'flex', alignItems:'center',width:'100%',justifyContent:'center'}}>
           <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 5 }}>
         {error ? (
        <>{error?.message}</>
      ) : isLoading ? (
        <>Loading....</>
      ) : data.data.length > 0 ?  data.data.map((category)=>  (
        <>
        <Card onClick={()=>{gotoBlogDetail(category)}} sx={{ maxWidth: 345, marginTop:5, margin: 1 }}>
      <CardMedia
        component="img"
        alt="Blog"
        image={category.image}
      />
       <CardContent>
        <Typography  component="div">
        {category.title}
        </Typography>
      </CardContent>
    </Card>
        </>
     ) ): console.log(data) }
    </div>
    </div>
  );
}