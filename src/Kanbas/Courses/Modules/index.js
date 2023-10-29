import ModuleList from "./ModuleList";
import "./index.css";
function Modules() {
  return (
    <div>
      <div class="row">
        <div class="row-auto">
            <div class="float-end">
                <a href="#" class="btn btn-secondary btn-m wd-btns"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
            </div>
            <div class="float-end">
                <a href="#" class="btn btn-danger btn-m wd-btns"><i class="fa fa-plus" aria-hidden="true"></i> Module</a>
            </div>
            <div class="dropdown">
                <a class="btn btn-secondary dropdown-toggle wd-btns float-end" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Publish All</a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Publish Modules Only</a></li>
                    <li><a class="dropdown-item" href="#">Unpublish All</a></li>
                </ul>
            </div>   
            <div class="float-end">
                <a href="#" class="btn btn-secondary btn-m wd-btns">View Progress</a>
            </div>   
            <div class="float-end">
                <a href="#" class="btn btn-secondary btn-m wd-btns">Collapse All</a>
            </div>
        </div>
    </div>
    <hr />
    <ModuleList />
    </div>
  );
}
export default Modules;