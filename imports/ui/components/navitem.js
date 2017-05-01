import React from 'react';
import { Link, IndexLink } from 'react-router'

class NavItem extends React.Component {
  render () {
    const { router } = this.context
    const { index, onlyActiveOnIndex, to, children, ...props } = this.props

    const isActive = router.isActive(to, onlyActiveOnIndex)
    const LinkComponent = index ? Link : IndexLink

    return (
      <li className={isActive ? 'active' : ''}>
        <LinkComponent to={to} children={children} {...props}>{children}</LinkComponent>
      </li>
    )
  }
}

NavItem.contextTypes = {
      router: React.PropTypes.object.isRequired
    };

export default NavItem;