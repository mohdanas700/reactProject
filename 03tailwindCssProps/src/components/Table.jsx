import React from "react";

function Table(props) {

    return (
        <section class="mx-auto w-full max-w-7xl px-4 py-4">
  <div class="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
    <div>
      <h2 class="text-lg font-semibold">Employees</h2>
      <p class="mt-1 text-sm text-gray-700">
        This is a list of all employees. You can add new employees, edit or
        delete existing ones.
      </p>
    </div>
    <div>
      <button
        type="button"
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add new employee
      </button>
    </div>
  </div>
  <div class="mt-6 flex flex-col">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden border border-gray-200 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  <span>Employee</span>
                </th>
                <th
                  scope="col"
                  class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Title
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Role
                </th>
                <th scope="col" class="relative px-4 py-3.5">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr>
                <td class="whitespace-nowrap px-4 py-4">
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {props.user1}
                      </div>
                      <div class="text-sm text-gray-700">john@devui.com</div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-12 py-4">
                  <div class="text-sm text-gray-900 ">Front-end Developer</div>
                  <div class="text-sm text-gray-700">Engineering</div>
                </td>
                <td class="whitespace-nowrap px-4 py-4">
                  <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Active
                  </span>
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  Developer
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <a href="#" class="text-gray-700">
                    Edit
                  </a>
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-4 py-4">
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {props.user2}
                      </div>
                      <div class="text-sm text-gray-700">jane@devui.com</div>
                    </div>
                  </div>
                </td>
                <td class="whitespace-nowrap px-12 py-4">
                  <div class="text-sm text-gray-900 ">Back-end Developer</div>
                  <div class="text-sm text-gray-700">Engineering</div>
                </td>
                <td class="whitespace-nowrap px-4 py-4">
                  <span class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                    Active
                  </span>
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                  CTO
                </td>
                <td class="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                  <a href="#" class="text-gray-700">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center pt-6">
    <a
      href="#"
      class="mx-1 cursor-not-allowed text-sm font-semibold text-gray-900"
    >
      <span class="hidden lg:block">← Previous</span>
      <span class="block lg:hidden">←</span>
    </a>
    <a
      href="#"
      class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
    >
      1
    </a>
    <a
      href="#"
      class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
    >
      2
    </a>
    <a
      href="#"
      class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
    >
      3
    </a>
    <a
      href="#"
      class="mx-1 flex items-center rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105"
    >
      4
    </a>
    <a href="#" class="mx-2 text-sm font-semibold text-gray-900">
      <span class="hidden lg:block">Next →</span>
      <span class="block lg:hidden">→</span>
    </a>
  </div>
</section>

    )
}

export default Table;