import User from "../models/User.js";

export const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const userId = req.user.id; // from auth middleware

    const avatarPath = `/uploads/${req.file.filename}`;

    const user = await User.findByIdAndUpdate(
      userId,
      { activeAvatar: avatarPath },
      { new: true }
    ).select("-password");

    res.json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Upload failed" });
  }
};
