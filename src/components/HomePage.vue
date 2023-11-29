<script setup lang="ts">
    import moment from "moment";
    import ConnectedNav from './ConnectedNavigator.vue'
    const data = [
        {"date": "2022-01-01 12:00", "price": 25000.45, "name": "BTC"},
        {"date": "2022-02-05 15:30", "price": 22000.78, "name": "BTC"},
        {"date": "2022-03-10 09:45", "price": 28000.12, "name": "BTC"},
        {"date": "2022-04-15 18:20", "price": 20500.90, "name": "BTC"},
        {"date": "2022-05-20 14:10", "price": 29500.67, "name": "BTC"},
        {"date": "2022-06-25 11:55", "price": 21000.34, "name": "BTC"},
        {"date": "2022-07-30 16:40", "price": 29000.56, "name": "BTC"},
        {"date": "2022-08-04 08:25", "price": 22500.78, "name": "BTC"},
        {"date": "2022-09-09 21:15", "price": 27500.23, "name": "BTC"},
        {"date": "2022-10-14 17:05", "price": 23000.45, "name": "BTC"},
        {"date": "2022-11-19 13:50", "price": 26500.89, "name": "BTC"},
        {"date": "2022-12-24 10:35", "price": 24000.67, "name": "BTC"},
        {"date": "2023-01-29 07:20", "price": 25500.34, "name": "BTC"},
        {"date": "2023-03-05 22:10", "price": 24500.56, "name": "BTC"},
        {"date": "2023-04-10 19:55", "price": 26000.78, "name": "BTC"},
        {"date": "2023-05-15 15:40", "price": 25000.23, "name": "BTC"},
        {"date": "2023-06-20 12:30", "price": 25500.45, "name": "BTC"},
        {"date": "2023-07-25 09:15", "price": 26500.89, "name": "BTC"},
        {"date": "2023-08-30 14:05", "price": 24000.67, "name": "BTC"},
        {"date": "2023-10-04 10:50", "price": 27500.34, "name": "BTC"},
        {"date": "2023-11-09 17:40", "price": 23000.56, "name": "BTC"},
        {"date": "2023-12-14 08:25", "price": 29000.78, "name": "BTC"},
        {"date": "2024-01-19 21:15", "price": 22000.23, "name": "BTC"},
        {"date": "2024-02-24 17:05", "price": 28000.45, "name": "BTC"},
        {"date": "2024-03-30 13:50", "price": 20500.67, "name": "BTC"},
        {"date": "2024-05-04 10:35", "price": 29500.34, "name": "BTC"},
        {"date": "2024-06-08 07:20", "price": 21000.56, "name": "BTC"},
        {"date": "2024-07-13 22:10", "price": 29000.78, "name": "BTC"},
        {"date": "2024-08-18 19:55", "price": 22500.23, "name": "BTC"},
        {"date": "2024-09-23 15:40", "price": 27500.45, "name": "BTC"},
        {"date": "2024-10-28 12:30", "price": 23000.89, "name": "BTC"},
        {"date": "2024-12-02 09:15", "price": 26500.67, "name": "BTC"},
        {"date": "2025-01-07 14:05", "price": 24000.34, "name": "BTC"},
        {"date": "2025-02-11 10:50", "price": 25500.56, "name": "BTC"},
        {"date": "2025-03-18 17:40", "price": 26500.78, "name": "BTC"},
        {"date": "2025-04-22 08:25", "price": 24000.23, "name": "BTC"},
        {"date": "2025-05-27 21:15", "price": 27500.45, "name": "BTC"},
        {"date": "2025-06-30 17:05", "price": 23000.67, "name": "BTC"},
        {"date": "2025-08-04 13:50", "price": 26500.34, "name": "BTC"},
        {"date": "2025-09-08 10:35", "price": 25000.56, "name": "BTC"},
        {"date": "2025-10-13 07:20", "price": 26000.78, "name": "BTC"},
        {"date": "2025-11-18 22:10", "price": 25500.23, "name": "BTC"},
        {"date": "2025-12-23 19:55", "price": 24500.45, "name": "BTC"},
        {"date": "2026-01-28 15:40", "price": 26000.89, "name": "BTC"},
        {"date": "2026-03-04 12:30", "price": 24500.67, "name": "BTC"}
    ]
    const lineGraphConfig = {
        options: {
            chart: {
                id: 'vuechart-example'
            },
            xaxis: {
                categories: data.map((item) => moment(item.date, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD'))
            },
            colors: ['#00bd7e'],
        },
        series: [{
            name: 'Your wallet evolution',
            data: data.map((item) => item.price)
        }],
    }
    const pieGraphConfig = {
        options: {
            colors: ['#00bd7e', '#5cb85c', '#a6a6a6', '#d9d9d9', '#f2f2f2'],
            labels: ["BTC", "ETH", "LTC", "USDT", "EUR"],
        },
        series: [24, 16, 30, 15, 15]
    }

</script>

<template>
    <ConnectedNav msg=""/>
    <div class="home">
        <h1 class="page-title">Your wallet</h1>
        <div class="charts">
            <div class="home-chart">
                <div class="chart-title">Evolution</div>
                <div class="chartPadding">
                    <apexchart type="line" :options="lineGraphConfig.options" :series="lineGraphConfig.series"></apexchart>
                </div>
            </div>
            <div class="home-chart">
                <div class="chart-title">Repartition</div>
                <div>
                    <apexchart type="donut" :options="pieGraphConfig.options" :series="pieGraphConfig.series"></apexchart>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .home {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    .charts {
        display: flex;
        gap: 50px;
        width: 100%;
    }
    .home-chart {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .chart-title {
        font-weight: 500;
        font-size: 25px;
    }
    .chartPadding {
        padding-top: 10%;
    }
</style>