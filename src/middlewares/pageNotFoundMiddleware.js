function pageNotFound (req, res) {
    res.status(404).json({ message: "Page Not Found", status: 404 });
};

export default pageNotFound;