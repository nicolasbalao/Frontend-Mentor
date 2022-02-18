import "../style/ListJob.css";
import dataJob from "../data/data.json";

function ListJob({ categoryFilter, updateCategoryFilter }) {
  function checkDuplicateCategoryList(categoryAdd) {
    return categoryFilter.includes(categoryAdd);
  }

  function filterByCategory(_job) {
    const jobCategory = Array.from(_job.languages).concat(_job.tools);
    jobCategory.push(_job.role, _job.level);

    return categoryFilter.every((cat) => jobCategory.includes(cat));
  }

  return (
    <div className="JobList">
      <ul>
        {dataJob.map((job) =>
          filterByCategory(job) || categoryFilter.length === 0 ? (
            <li className="JobList__card new" key={job.id}>
              <div className="JobList__card_content">
                <div className="JobList__card_responsive">
                  <div className="JobList__card_logo">
                    <img src={`${job.logo}`} alt="logo-company"></img>
                  </div>
                  <div className="JobList__card_description">
                    <div className="JobList__card_company">
                      <p className="JobList__card_company_name">
                        {job.company}
                      </p>
                      {job.new ? (
                        <span className="JobList__card_company_new">NEW!</span>
                      ) : null}
                      {job.featured ? (
                        <span className="JobList__card_company_featured">
                          FEATURED
                        </span>
                      ) : null}
                    </div>
                    <div className="JobList__card_jobDescription">
                      <div className="JobList__card_jobDescription_title">
                        {job.position}
                      </div>
                      <div className="JobList__card_jobDescription_list">
                        <p>{job.postedAt}</p>
                        <div className="JobList__card_jobDescription_sep"></div>
                        <p>{job.contract}</p>
                        <div className="JobList__card_jobDescription_sep"></div>
                        <p>{job.locations}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="JobList__card_sep"></div>
                <div className="JobList__card_category">
                  <p
                    onClick={() =>
                      checkDuplicateCategoryList(job.role)
                        ? null
                        : updateCategoryFilter(
                            categoryFilter.concat([job.role])
                          )
                    }
                  >
                    {job.role}
                  </p>
                  <p
                    onClick={() =>
                      checkDuplicateCategoryList(job.level)
                        ? null
                        : updateCategoryFilter(
                            categoryFilter.concat([job.level])
                          )
                    }
                  >
                    {job.level}
                  </p>
                  {job.languages.map((language) => (
                    <p
                      onClick={() =>
                        checkDuplicateCategoryList(language)
                          ? null
                          : updateCategoryFilter(
                              categoryFilter.concat(language)
                            )
                      }
                    >
                      {language}
                    </p>
                  ))}
                  {job.tools.map((tools) => (
                    <p
                      onClick={() =>
                        checkDuplicateCategoryList(tools)
                          ? null
                          : updateCategoryFilter(categoryFilter.concat(tools))
                      }
                    >
                      {tools}
                    </p>
                  ))}
                </div>
              </div>
            </li>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ListJob;
