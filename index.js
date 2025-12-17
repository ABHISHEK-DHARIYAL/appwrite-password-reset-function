/**
 * Appwrite Password Reset Function
 * Runtime: Node.js 18
 */

export default async ({ req, res }) => {
  try {
    return res.json({
      success: true,
      message: "PasswordResetFunction deployed successfully 🚀"
    });
  } catch (error) {
    return res.json(
      { success: false, error: error.message },
      500
    );
  }
};
