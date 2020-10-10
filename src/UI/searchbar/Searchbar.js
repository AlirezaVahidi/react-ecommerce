import React from "react";
import classes from "./searchbar.module.css";
import searchLogo from "../../Resources/icons/search-logo.svg"

const Searchbar = (props) => {
	return (
		<div>
			<form>
				<div className={classes.searchGroup}>
					<div className={classes.searchInputContainer}>
                        <img className={classes.searchLogo} src={searchLogo} alt="Search Logo" />
						<input
							type="text"
							placeholder="برند، کالا و یا دسته بندی مورد نظر خود را جستجو کنید"
							name="search"
							className={classes.searchInput}
						/>
					</div>

					<div className={classes.searchButtonContainer}>
						<button className={classes.searchButton} type="button">
							جستجو
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Searchbar;
