export default function protectRoute(req, res, next) {
  try {
    next();
  } catch (error) {}
}
