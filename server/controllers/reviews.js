import Review from '../models/review.js';

export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ business_id: req.params.restaurantId });

        res.status(200).json(reviews);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createReview = async (req, res) => {
    console.log(req.body);
    const reviewInfo = req.body;

    const newReview = new Review(reviewInfo);

    try {
        await newReview.save();
        // 201: Succesful creation
        res.status(201).json(newReview);
        
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}