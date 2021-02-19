import jwt from "jsonwebtoken";
import userModel from "../../presenter/userModel";

export default async (req, res, next) => {
  if (!req.cookies.auth) return res.status(401).json({ errors: ["Login required"] });

  try {
    const data = jwt.verify(req.cookies.auth, process.env.TOKEN_SECRET);
    const { id, email } = data;

    const user = await userModel.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) return res.status(401).json({ errors: ["User is not defined"] });

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({ errors: ["Session has expired or it is invalid."] });
  }
};
