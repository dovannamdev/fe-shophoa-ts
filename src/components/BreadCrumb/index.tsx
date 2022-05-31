import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
  faHeartCircleBolt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function BreadCrumb() {
  return (
    <div className="breadcrumbs-area position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="breadcrumb-content position-relative section-content">
              <ul>
                <li>
                  <Link to="/">
                    <FontAwesomeIcon color="" icon={faHeartCircleBolt} /> Home{" "}
                    <FontAwesomeIcon icon={faHeartCircleBolt} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
