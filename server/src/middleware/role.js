/**
 * Role-based authorization middleware
 * Usage: role(["admin", "manager"])
 */
export const role = (roles) => {
  return async (req, res, next) => {
    try {
      if (!req.user || !req.user.id) {
        return res.status(401).json({ message: "Unauthorized: user ID missing" });
      }

      // User is already set in auth middleware
      const userRole = req.user.role; 

      if (!roles.includes(userRole)) {
        return res.status(403).json({ message: "Forbidden: Access denied" });
      }

      next();
    } catch (err) {
      console.error("Role middleware error:", err);
      res.status(500).json({ message: "Server error" });
    }
  };
};
