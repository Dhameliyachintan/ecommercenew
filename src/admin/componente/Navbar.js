import React from "react";

const Navbar = ({ filterItem, uniqueList }) => {
  return (
    <>
      <nav className="navbar11 justify-content-center align-items-center">
        <div className="btn-group">
          <div className="row ">
            <div className="col-md-12">
              <div className="product-filters"> 
              <ul className="d-flex p-0">
                {uniqueList.map((valcatagory, index) => {
                  return (
                    <li className="nav-link btn btn-dark text-white mx-3" key={index} data-filter="" onClick={() => filterItem(valcatagory)}>{valcatagory}</li>
                    
                  )
                })}
              </ul>
              </div>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
