const images = [
  { id: "1b7b6d51-4006-447d-b5b6-fffd4f800e55", likes: 0 },
  { id: "2cbf533f-0055-42ea-b788-ff8207ce7a16", likes: 0 },
  { id: "42368e89-cc74-4766-86a3-abb4fb522aee", likes: 0 },
  { id: "6325c87b-45cb-4571-9ebc-26a0a64c85be", likes: 0 },
  { id: "68ac7138-b5a7-4e5e-a4ee-e2210d60da6b", likes: 0 },
  { id: "746ca9da-92cd-44c6-9f35-964645173a18", likes: 0 },
  { id: "90ec12f1-7779-415e-9e7b-5f70a3db10a4", likes: 0 },
  { id: "96d4bdd2-a0c8-4998-a14a-3d3ebf1f5c66", likes: 0 },
  { id: "d25405b3-fc30-4fd4-a8bb-cbbb4ef259f4", likes: 0 },
  { id: "fcc40f61-b7cd-4813-88c0-4d7f907a9b19", likes: 0 },
];

const getCountsById = (req, res, next) => {
    console.log()
    const { id } = req.params;
    const result = images.find(image => image.id === id);

    if (!result) {
      return next({ status: 404, message: 'Image not found' });
    }

    return res.status(200).json({count: result.likes});
  }

const manageLike = (req, res, next) => {
    const { imageId, liked } = req.body;
    const result = images.find(image => image.id === imageId);
    if (!result) {
        images.push({id: imageId, likes: 1});
    }
    const objIndex = images.findIndex((obj => obj.id === imageId));

    if (liked)
        images[objIndex].likes += 1;
    else if (images[objIndex].likes > 0)
        images[objIndex].likes -= 1;

    res.status(201).json({actualCount: images[objIndex].likes});
}

module.exports = {
    manageLike, getCountsById
}
