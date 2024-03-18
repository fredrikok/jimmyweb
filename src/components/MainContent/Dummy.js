import React, { useState, useEffect } from "react";
import { Grid, Image, Container } from "semantic-ui-react";

const Dummy = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15"
      );
      const data = await response.json();
      setImages(data);
    };

    fetchImages().catch(console.error);
  }, []);

  return (
    <Container>
      <Grid columns={3}>
        {images.map((image, index) => (
          <Grid.Column key={index}>
            <Image src={image.url} alt={image.alt_description} />
          </Grid.Column>
        ))}
      </Grid>
    </Container>
  );
};

export default Dummy;
