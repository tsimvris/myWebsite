import StyledHeader from "./styledComponents/styledLogo";
import StyledNav from "./styledComponents/styledNavBar";
import StyledNavLink from "./styledComponents/styledLinks";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/team">Team</StyledNavLink>
        <StyledNavLink to="/product">Product</StyledNavLink>
        <StyledNavLink to="/account">Account</StyledNavLink>
      </StyledNav>
    </StyledHeader>
  );
}
