import * as React from 'react'
import { useGetBlogCategoriesQuery } from '../services/Category'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

export default function BlogDetails(props) {
  const { data, error, isLoading } = useGetBlogCategoriesQuery(
    'blogs/marketplace-management?page=1',
  )
  console.log(data)
  React.useEffect(() => {}, [props.state])
  return (
    <div
      className="App"
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 5,
        }}
      >
        {error ? (
          <>{error?.message}</>
        ) : isLoading ? (
          <>Loading....</>
        ) : data.blogs.data.length > 0 ? (
          data.blogs.data.map((category) => (
            <>
              <Card sx={{ maxWidth: 345, marginTop: 5, margin: 1 }}>
                <CardMedia
                  component="img"
                  alt="Blog"
                  image={category.full_img}
                />
                <CardContent>
                  {/* <Typography component="div">{category.title}</Typography> */}
                  <Typography component="div2" variant="h5">{category.slug}</Typography>
                  <Typography component="div">{category.detail}</Typography>
                </CardContent>
              </Card>
            </>
          ))
        ) : (
          console.log(data)
        )}
      </div>
    </div>
  )
}
