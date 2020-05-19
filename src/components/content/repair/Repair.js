import React from "react";


class Repair extends React.Component {


    render() {
        return (
            <div>
<container>
    <span> {this.props.repair.id} </span>
    <span> {this.props.repair.needed} </span>
    <span> {this.props.repair.lawNumber} </span>
    <span> {this.props.repair.author} </span>
    <span> {this.props.repair.placementPhase} </span>
    <span> {this.props.repair.posted} </span>
    <span> {this.props.repair.updated} </span>
    <span> {this.props.repair.initialContractprice} </span>
    <span> {this.props.repair.name} </span>
    <span> {this.props.repair.placementStages} </span>
    <span> {this.props.repair.link} </span>
    <span> {this.props.repair.uin} </span>




    {/*boolean needed;*/}
    {/*// номер закона - ПП РФ 615 (Капитальный ремонт)*/}
    {/*private String lawNumber;*/}
    {/*// Заказчк -*/}
    {/*private String author;*/}
    {/*// Этап размещения:  Работа комиссии*/}
    {/*private String placementPhase;*/}
    {/*//Размещено: 10.04.2020*/}
    {/*private LocalDate posted;*/}
    {/*// Обновлено: 07.05.2020*/}
    {/*private LocalDate updated;*/}
    {/*// Начальная цена контракта: 4115914.02*/}
    {/*private BigDecimal initialContractprice;*/}
    {/*// Объект закупки*/}
    {/*private String name;*/}
    {/*//этапы размещения*/}
    {/*private String placementStages;*/}
    {/*// <link>/epz/order/notice/ea615/view/common-info.html?regNumber=206520000011900119</link>*/}
    {/*private String link;*/}
    {/*// Уникальный номер закупки uin*/}
    {/*private long uin;*/}
</container>
            </div>
        )
    }
}


export default Repair
