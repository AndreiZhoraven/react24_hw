var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var CARS = [{
  id: 1,
  brand: "Audi",
  models: [{
    id: 1,
    name: "A1",
    collection: [{
      id: 1,
      version: "Sportback",
      year: 2019,
      horsepower: 95,
      engine: 999
    }, {
      id: 2,
      version: "Citycarver",
      year: 2019,
      horsepower: 95,
      engine: 999
    }]
  }, {
    id: 2,
    name: "Q5",
    collection: [{
      id: 1,
      version: "FY 2021",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }, {
      id: 2,
      version: "Sportback",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }]
  }, {
    id: 3,
    name: "TT",
    collection: [{
      id: 1,
      version: "Coupe",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }, {
      id: 2,
      version: "Roadster",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }]
  }]
}, {
  id: 2,
  brand: "BMW",
  models: [{
    id: 1,
    name: "8 series",
    collection: [{
      id: 1,
      version: "G1X LCI",
      year: 2022,
      horsepower: 333,
      engine: 2998
    }, {
      id: 2,
      version: "G1X",
      year: 2019,
      horsepower: 340,
      engine: 2998
    }]
  }, {
    id: 2,
    name: "X6",
    collection: [{
      id: 1,
      version: "G06 LCI",
      year: 2023,
      horsepower: 530,
      engine: 4395
    }, {
      id: 2,
      version: "G06",
      year: 2020,
      horsepower: 286,
      engine: 2993
    }]
  }]
}];

var brandStyle = {
  backgroundColor: "blue",
  color: "white",
  textAlign: "center"
};

var modelStyle = {
  backgroundColor: "red",
  color: "white",
  textAlign: "center"
};

var CarsTable = function CarsTable(_ref) {
  var carsList = _ref.carsList;

  return React.createElement(
    "table",
    { className: "table__cars" },
    React.createElement(
      "tbody",
      null,
      carsList.map(function (car, carIndex) {
        return React.createElement(
          React.Fragment,
          { key: carIndex },
          React.createElement(
            "tr",
            null,
            React.createElement(
              "td",
              { colSpan: "2", style: brandStyle },
              car.brand
            )
          ),
          car.models.map(function (model, modelIndex) {
            return React.createElement(
              React.Fragment,
              { key: modelIndex },
              model.collection.map(function (item, itemIndex) {
                return React.createElement(
                  "tr",
                  { key: itemIndex },
                  itemIndex == 0 ? React.createElement(
                    "td",
                    { rowSpan: model.collection.length, style: modelStyle },
                    model.name
                  ) : null,
                  React.createElement(
                    "td",
                    null,
                    React.createElement(
                      "ul",
                      null,
                      React.createElement(
                        "li",
                        null,
                        "Version: ",
                        item.version
                      ),
                      React.createElement(
                        "li",
                        null,
                        "Year: ",
                        item.year
                      ),
                      React.createElement(
                        "li",
                        null,
                        "Horsepower: ",
                        item.horsepower
                      ),
                      React.createElement(
                        "li",
                        null,
                        " Engine: ",
                        item.engine
                      )
                    )
                  )
                );
              })
            );
          })
        );
      })
    )
  );
};

root.render(React.createElement(
  React.Fragment,
  null,
  React.createElement(CarsTable, { carsList: CARS })
));