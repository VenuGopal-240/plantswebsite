import React, { useState } from "react";
// import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge,IconButton } from "@mui/material";

const CartWithBadge = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
      {/* Cart Icon with Badge */}
      <IconButton aria-label="cart">
        <Badge badgeContent={cartCount} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      {/* Add to Cart Button */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default CartWithBadge;
