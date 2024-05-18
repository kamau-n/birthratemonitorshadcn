import { payments } from "@/features/dashboards/types"
import { DataTable } from "../../dashboard/data-table"
import { columns } from "../../dashboard/columns"

export default  function usertables () {
    return(
    <div>
      <h2 className="text-lg font-normal">
                            Latest Admission
                        </h2>
                        <DataTable data={payments} columns={columns} />
    </div>
    )
}