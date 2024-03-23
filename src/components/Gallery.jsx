import React from 'react'

const Gallery = () => {
    const data = [
        {
          imageLink:
            "https://img.freepik.com/premium-photo/indian-farmer-holding-tomato-hands-happy-farmer_898049-99.jpg",
        },
        {
          imageLink:
            "https://www.diabetes.ie/wp-content/uploads/2022/11/ShutterstockBasic_2160763437-scaled.jpg",
        },
        {
          imageLink:
            "https://media4.manhattan-institute.org/sites/cj/files/economic-growth-is-still-our-best-hope.jpg",
        },
        {
          imageLink:
            "https://birlahealthcare.com/wp-content/uploads/2022/02/Importance-of-Green-Vegetables.jpg",
        },
        {
          imageLink:
            "https://bsmedia.business-standard.com/_media/bs/img/article/2017-12/02/full/1512157334-2189.jpg?im=FeatureCrop,size=(382,233)",
        },
        {
          imageLink:
            "https://www.ucsf.edu/sites/default/files/2023-02/research-banner-v2%20%281%29.jpeg",
        },
       
      ];
  return (
    <>
    
    <div className="grid grid-cols-1 w-[80%] m-auto sm:grid-cols-2 md:grid-cols-3 ">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-60 w-full max-w-full  object-cover object-center cursor-pointer"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    
    </>
  )
}

export default Gallery



